# Play again

You can run this step with ``reach run``!

## Example output when a draw happens:
```
$ reach run

Bob accepts the wager of 5.
Alice played Scissors
Bob played Scissors
Alice played Scissors
Bob played Paper
Alice saw outcome Alice wins
Bob saw outcome Alice wins
Alice went from 100 to 104.99.
Bob went from 100 to 94.996.
```

## Example output when a draw doesn't happen:
```
$ reach run
Bob accepts the wager of 5.
Alice played Paper
Bob played Rock
Alice saw outcome Alice wins
Bob saw outcome Alice wins
Alice went from 100 to 104.992.
Bob went from 100 to 94.997.
```
