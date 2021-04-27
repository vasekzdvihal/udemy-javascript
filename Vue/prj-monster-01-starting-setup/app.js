function getRandomValue(min, max) {
    const attackValue = Math.floor(Math.random() * (max - min)) + min;
}

const app = {
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8 ,15);
            this.playerHealth = this.playerHealth - attackValue;
        }
    }
};

Vue.createApp(app).mount('#game');

