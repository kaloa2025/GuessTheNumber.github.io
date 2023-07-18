const app = Vue.createApp({
  data() {
    return {
      guess: [],
      num: '',
      rno:Math.floor((Math.random() * 10) + 1),
      chance:3,
      name:'',
      points:0,
      vueLink:'https://github.com/kaloa2025/Guess_Number',
    };
  },
  methods: {
    check() {
      if(this.chance==0)
      {
        alert('No more chances left');
      }
      else
      {
      this.guess.push(this.num);
      this.num='';
      this.chance--;
      }},

      setName(event,lastname){
        this.name = event.target.value+' '+lastname;
      },
      
      output()
    {
      if(this.chance!=0)
      {
      if(this.num==this.rno)
      {
        this.points=this.points+(this.chance*100);
        alert('Congrats Number guessed Correctly');
      }
      else
      {
        if(this.num>this.rno)
        {
          alert('Failed ! Try Again'+'\n'+'The Number is smaller than guessed value '+this.num);
        }
        else
        {
          alert('Failed ! Try Again'+'\n'+'The Number is greater than guessed value '+this.num);
        }
      }}
    },
    show()
    {
      if(this.chance==0)
      {
        alert('The number is '+ this.rno);
      }
      else
      {
        alert('You can see the result after 3 chances only');
      }
    },
    reset()
    {
      this.guess=[];
      this.num='';
      this.chance=3;
      this.name='';
      this.points=0;
    }
  }
  });
  app.mount('#guessgame');