<script lang="ts">
  import * as Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import { Bar } from 'vue-chartjs';

  @Component({ extends: Bar })
  class AppChart extends Vue {
    mounted () {
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#6f42c1',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      });
    }
  }

  export default AppChart;
</script>
