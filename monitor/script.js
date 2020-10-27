Vue.component("status-card", {
  props: ["appName", "serviceData"],
  data() {
    return {
      down: false,
      localServiceData: {},
    };
  },
  created() {
    try {
      this.localServiceData = this.serviceData.instance[0];
    } catch (error) {
      this.down = true;
    }
  },
  template: `<div class="col-6 mb-4">
  <div class="card" v-if="!down">
    <div class="card-body">
      <h5 class="card-title">{{ appName }}</h5>
      <p class="card-text">
        <h3>{{ localServiceData.hostName }}</h3>
        <b>INSTANCE ID</b> - {{ localServiceData.instanceId }}
      </p>
      <a href="#" class="btn btn-success">STATUS - UP</a>
    </div>
  </div>

  <div class="card" v-else>
    <div class="card-body">
      <h5 class="card-title">{{ appName }}</h5>
      <p class="card-text">
        <h3>XXX.XXX.XXX.XXX</h3>
        <b>INSTANCE ID</b> - N/A
      </p>
      <a href="#" class="btn btn-danger">STATUS - DOWN</a>
    </div>
  </div>
</div>
`,
});

var app = new Vue({
  el: "#app",
  data: {
    registered: [
      "STUDENTSERVICE",
      "TEACHERSERVICE",
      "REGISTRARSERVICE",
      "WORKSERVICE",
      "ACCOUNTSERVICE",
    ],
    application: [],
    loaded: false,
  },
  async created() {
    const { data } = await axios.get("http://localhost:8761/eureka/apps/", {
      Accept: "application/json",
    });
    this.application = data.applications.application;
    this.loaded = true;
  },
});
