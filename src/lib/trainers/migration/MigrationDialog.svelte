<script lang="ts">
	import { browser } from "$app/environment"
	import { page } from "$app/stores"
	import { onDestroy, onMount } from "svelte"
	import { migrationStatus } from "./store"
	import { respondToMessage } from "./respond-to-message"
	import { OLD_ORIGIN } from "./origins"
	import Button from "$lib/design/Button.svelte"
	import { trainers } from "../trainers"
	import TransferredTrainers from "./TransferredTrainers.svelte"

	let modal: HTMLDialogElement
	let iframe: HTMLIFrameElement

	const initialMigrationStatus = $migrationStatus

	$: {
		if (modal != null && $migrationStatus === "manual" && $page.url.pathname.startsWith("/trainers")) {
			modal.showModal()
		}
	}

	onMount(() => {
		if (initialMigrationStatus !== "done") {
			window.addEventListener("message", respondToMessage)
			if (iframe != null) {
				iframe.src = `${OLD_ORIGIN}/storage-migration/poke5e/automatic`
			}
	
			modal.addEventListener("close", () => {
				migrationStatus.set("done")
			}, { once: true })
		}
	})

	onDestroy(() => {
		if (browser) {
			window.removeEventListener("message", respondToMessage)
		}
	})
</script>

{#if initialMigrationStatus !== "done"}
	<dialog bind:this={modal}>
		<header>Trainer Data Transfer</header>
		<div class="content-area">
			<section>
				<p>Poke 5e has a new home! We moved from <strong>auroratide.github.io/poke5e</strong> to <strong>poke5e.app</strong>, much less of a mouthful. You are seeing this dialog because we could not transparently transfer your trainer data from the old location.</p>
			</section>
			<section>
				{#if $migrationStatus === "manual" || $migrationStatus === "not started"}
					<p>Simply click the following "Start Transfer" button, and that's it!</p>
					<iframe bind:this={iframe} title="Trainer Data Transfer" frameborder="0"></iframe>
					<details>
						<summary>Why is this necessary?</summary>
						<p>Curious about the technical details, are you?</p>
						<p>Poke 5e knows which trainers are <em>yours</em> by storing their IDs on the browser. This is why you don't need an account at all to use the app.</p>
						<p>Different websites cannot access each others' data. That's great! It means, for example, that malicious websites cannot access data stored by your bank.</p>
						<p>By moving this site to <strong>poke5e.app</strong>, it's <em>technically</em> a different website. Therefore, it cannot data at the old location. However, if code at the old location cooperates with the new location, data transfer becomes possible.</p>
						<p>The "Start Transfer" button is simply you granting this website permission to access data at the old location.</p>
					</details>
					<p>Or, if you're new here, you can simply close this dialog.</p>
					<form method="dialog">
						<div class="center">
							<Button type="submit" variant="danger">Close</Button>
						</div>
					</form>
				{:else if $migrationStatus === "failed"}
					<p class="failure">We apologize! Your trainer data could not be automatically transferred.</p>
					<p class="failure">Your data is not lost! You will have to manually transfer your trainers using their IDs. Follow the link below to get your list of trainer IDs.</p>
					<form method="dialog">
						<div class="center">
							<Button href="https://auroratide.github.io/storage-migration/poke5e">Your Trainer IDs</Button>
							<Button type="submit" variant="danger">Close</Button>
						</div>
					</form>
				{:else if $migrationStatus === "done"}
					{#await trainers.all()}
						<p>Almost done...</p><!-- in theory won't see this -->
					{:then allTrainers}
						<TransferredTrainers trainers={allTrainers} />
					{:catch error}
						<p class="failure">Failed to get list of trainers: {error}</p>
					{/await}
				{/if}
			</section>
		</div>
	</dialog>
{/if}

<style>
	dialog {
		border-radius: 2em;
		border: none;
		padding: 0;
		box-shadow: var(--elev-cirrus);
		position: fixed;
		inset: 50%;
		transform: translate(-50%, -50%);
		inline-size: 95vw;
		max-inline-size: calc(var(--container-width) / 2);
		background: none;
	} dialog::backdrop {
		background: var(--skin-shade);
	}

	header {
		background-color: var(--skin-bg);
		color: var(--skin-bg-text);
		padding: 0.5em 1em;
		font-weight: 700;
		font-size: var(--font-sz-neptune);
	}

	.content-area {
		background: var(--skin-content);
		padding: 0 0 1em 0;
	}

	section {
		padding: 0.5em 1em;
	}

	iframe {
		inline-size: 100%;
		block-size: 80px;
	}

	p { line-height: 1.4; }

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1em;
	}

	.failure { color: var(--skin-danger-text); }

	details {
		font-size: var(--font-sz-venus);
	} summary {
		cursor: pointer;
		margin-block-end: 0.5em;
	}
</style>