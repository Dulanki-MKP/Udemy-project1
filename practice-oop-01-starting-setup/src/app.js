import * as _ from "lodash";

import { ProjectList } from "./App/ProjectList";

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const someScript = document.createElement('script');
    // someScript.textContent = 'alert("Hi, there!");';
    // document.head.append(someScript);

    // document
    // .getElementById('start-analytics-btn')
    // .addEventListener('click', this.startAnalytics);

    // const timerId = setTimeout(this.startAnalytics, 3000);

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //         clearTimeout(timerId);
    // });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "assets/scripts/Utility/Analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
