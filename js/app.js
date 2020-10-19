new Vue({
    el:"#app",
    data: {
        healthPlayer:100,
        healthMonster:100,
        gameIsRuning: false,
        numOfspecialAttack: 2,
        numHealth : 2,
        turn: []
    },
    methods:{
        startNewGame(){
            this.gameIsRuning = true
            this.healthPlayer = 100
            this.healthMonster = 100
            this.numOfspecialAttack = 2
            this.turn = []

        },
        attack(){
            //check option
            this.checkPlayerOption()
           
            // monster
               dameMonster = this.inputDamage(5,10)
                this.healthPlayer -= dameMonster
                this.turn.unshift({
                    isplayer:false,
                    textLog : 'Monster hit player for ' + dameMonster
                })
            //player
                damePlayer = this.inputDamage(4,9)
                this.healthMonster -= damePlayer
                this.turn.unshift({
                    isplayer:true,
                    textLog : 'Player hit Monster for ' + damePlayer
                })
            this.checkPlayerOption()
        },
        specialAttack(){
            if(this.numOfspecialAttack > 0){
                this.numOfspecialAttack--
                //check option
                this.checkPlayerOption()
               
                // monster
                    dameMonster = this.inputDamage(3,10)
                    this.healthPlayer -=dameMonster
                    this.turn.unshift({
                        isplayer:false,
                        textLog : 'Monster hit player for ' + dameMonster
                    })
                //player

                damePlayer = this.inputDamage(10,12)
                this.healthMonster -= damePlayer
                this.turn.unshift({
                    isplayer:true,
                    textLog : 'Player hit Monster for ' + damePlayer
                })
                this.checkPlayerOption()
            }else{
                alert('You have run out of special attacks')
            }
            
        },
        heal(){
            if(this.numHealth > 0){
                if(this.healthPlayer >= 99){
                    alert('you are still full of health')
                }else if(this.healthPlayer >= 90){
                    this.numHealth--
                    this.healthPlayer = 100
                }else {
                    this.numHealth--
                    this.healthPlayer +=10
                }
            }else {
                alert('You have run out of health')
            }
        },
        giveUp(){
            if(confirm( "You lost! new game ?")){
                this.startNewGame()
            }else{
                this.gameIsRuning = false
            }
        },
        inputDamage(min,max){
            return Math.floor(Math.random() * (max - min) ) + min
        },
        checkPlayerOption(){
            if(this.healthMonster <= 0){
                if(confirm( "You won! new game ?")){
                    this.startNewGame()
                }else{
                    this.gameIsRuning = false
                }
                return true
            }else if(this.healthPlayer <= 0){
                if(confirm('You lost! new game ? ')){
                    this.startNewGame()
                }else{
                    this.gameIsRuning = false
                }
                return true

            }
             return
        }
    }
});