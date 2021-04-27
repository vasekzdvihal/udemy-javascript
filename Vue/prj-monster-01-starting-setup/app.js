function getRandomValue(min, max) {
    const attackValue = Math.floor(Math.random() * (max - min)) + min;
    return attackValue;
}

const app = {
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
      monsterBarStyles()  {
         return {width: this.monsterHealth + '%'};
      },
      playerBarStyles() {
          return {width: this.playerHealth + '%'};
      },
      mayUseSpecialAttack() {
          return this.currentRound % 3 !== 0
      }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8 ,15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10 ,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    }
};

Vue.createApp(app).mount('#game');

