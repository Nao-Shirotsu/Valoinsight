# Valoinsight

Simple static site to visualise VALORANT match KPI scores. KPI items are hard-coded and scores can be entered manually or loaded from a CSV file. The page displays the average score of the entered KPIs.

## Usage

Open `index.html` in your browser. Enter scores for each KPI or select a CSV file with the following format. KPI items are grouped by phase and identified by `id` values.

```
id,score,notes
remember-vc,0,
role-balance,0,
strategy-axis,0,
...
```

The average score will update automatically as scores are entered or when the CSV is loaded.
