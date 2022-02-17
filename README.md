# Timeouts and Participation

You can run this step with ``reach run``!

### Example output when Bob times out
```
$ reach run
Alice played Scissors
  Bob takes his sweet time...
  Bob takes his sweet time...
  Bob takes his sweet time...
  Bob takes his sweet time...
  Bob takes his sweet time...
  Bob takes his sweet time...
  Bob takes his sweet time...
  Bob takes his sweet time...
  Bob takes his sweet time...
  Bob takes his sweet time...
Bob played Scissors
Bob observed a timeout
Alice observed a timeout
Alice went from 100 to 99.996.
Bob went from 100 to 99.9971.
```

### Example output when there's no timeout
```
$ reach run
Alice played Rock
Bob accepts the wager of 5.
Bob played Paper
Alice saw outcome Bob wins
Bob saw outcome Bob wins
Alice went from 100 to 94.992.
Bob went from 100 to 104.998.
