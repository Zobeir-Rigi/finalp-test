import { mandatoryCourswork } from "./MandatoryPulls";

export const fetchData = (githubUrl) => {
  return fetch(githubUrl)
    .then((res) => res.json())
    .then((responseData) => {
      const filteredPulls = responseData.items.filter((pull) => {
        const repoName = pull.url
          .replace("https://api.github.com/repos/CodeYourFuture/", "") //its because we dont want the url and also issues number(trying to get only repo name)
          .split("/")[0];
        return mandatoryCourswork.includes(repoName);
      });
      return filteredPulls;
    })
    .catch((err) => console.log("Something went wrong", err));
  return [];
};
