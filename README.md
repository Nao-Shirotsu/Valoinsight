# Valoinsight

Simple static site to visualise VALORANT match KPI scores. KPI items are hard-coded and scores can be entered manually or loaded from a CSV file. The page displays the average score of the entered KPIs.

## Usage

Open `index.html` in your browser. Enter scores for each KPI or select a CSV file with the following format:

```
id,score,notes
crosshair,80,good crosshair placement
communication,70,need to call more
map,90,solid awareness
```

The average score will update automatically as scores are entered or when the CSV is loaded.
