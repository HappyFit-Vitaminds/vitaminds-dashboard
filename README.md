
[ react-gcp-app ] Test Deploying React App to GCP
================================================================================

Based on these tutorials:
* https://medium.com/swlh/deploying-a-react-app-to-google-cloud-run-with-github-actions-ae24ac6cb85a
* https://mherman.org/blog/dockerizing-a-react-app/

## Assumptions

* SERVICE_NAME=react-gcp-app
* secrets.GCR_PROJECT
* secrets.GCR_SA_KEY 


## 3. init GCP CLI
```
gcloud init
gcloud auth configure-docker
docker push gcr.io/[secrets.$GCR_PROJECT]/[$SERVICE_NAME]

```

\