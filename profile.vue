<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>settings page</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>
<body>
    <div id="app">
    <div class="nav">
      <ul>
        <li v-for="(tab, index) in tabs" @click="activateTab(index)" :class="{ active: activeTab === index }">{{ tab.name }}</li>
      </ul>
    </div>

    <div class="tab" v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
      <h1>{{ tab.name }}</h1>
      <p>{{ tab.content }}</p>
    </div>

    <!-- Other HTML content -->
    
    <p class="bio" v-if="showShortBio">{{ shortBio }}<span @click="toggleBio">See More</span></p>
    <p class="bio" v-else>{{ fullBio }}<span @click="toggleBio">See Less</span></p>
    <p class="alert-message" :style="{ fontSize: alertFontSize }">Alert Message</p>
  </div>

  <script>
    new Vue({
      el: '#app',
      data: {
        activeTab: 0,
        tabs: [
          { name: 'Your Post', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...' },
          { name: 'User reviews', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...' },
          { name: 'Account Setting', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...' },
        ],
        showShortBio: true,
        shortBio: '',
        fullBio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        alertFontSize: '1rem',
      },
      methods: {
        activateTab(index) {
          this.activeTab = index;
        },
        toggleBio() {
          this.showShortBio = !this.showShortBio;
        },
      },
      created() {
        this.shortBio = this.fullBio.substring(0, 100) + '...';
        if (document.querySelector('.alert-message').innerText > 9) {
          this.alertFontSize = '0.7rem';
        }
      },
    });
  </script>
</body>
</html>


