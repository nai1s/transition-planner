# ganttrans

This project is a really basic web UI for creating a Gantt Chart of all the steps needed to transition. Please see Disclaimer.html for all the disclaimer details (I'm not a medical professional, talk to your doctor, this site stores no personal info, etc.).

If you want to help me out by making the frontend shinier, ping me on a PR.

## Running the Project locally

Use 

```
node index.js
```

To start the node server on port 8080. Navigate a browser to localhost:8080 to view content.

## Running with docker

```

docker build -t my-transition-planner .
docker run my-transition-planner -p 8080:8080

```

or

```
docker-compose up -d .
```

## Running in kubernetes

This is a bit more advanced, you can use the attached helm chart for this if desired.

Louis(e)