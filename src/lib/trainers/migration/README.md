# Trainer Data Migration

For moving trainers' data from the old github domain to the new poke5e.app domain.

1. Attempt to transparently via an iframe and postMessage transfer local storage from one domain to the parent.
2. If that fails, we may need to request explicit permission via a user interaction. Hence, a button in an iframe is shown which will conduct the transfer.
3. If _that_ fails, users will need to manually transfer over IDs.
