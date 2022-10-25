<template>
  <div class="outer-frame">
    <h3 style="text-align:center">基础计算器</h3>
    <div class="screen">
        <!-- <span v-for="item, index in inputArr" :key="index">
            {{ item }}
        </span> -->
        <div>{{str}}</div>
        <!-- <div>{{sum}}</div> -->
    </div>
    <div class="del">
        <button @click="AC">AC</button>
        <button @click="del">del</button>
    </div>
    <div class="main-interface">
      <div class="number">
        <div v-for="(item,index) in numbers" :key="index">
          <button class="number-btn" @click="clickNumber(item)">{{item}}</button>
        </div>
        <button class="other" @click="dot()">.</button>
        <button class="other" style="background:rgb(51, 135, 244);color: white;" @click="result">=</button>
      </div>
      <div class="symbol">
        <button @click="add" value="+">+</button>
        <button @click="sub" value="-">-</button>
        <button @click="multiply" value="*">*</button>
        <button @click="divide" value="÷">÷</button>
      </div>
    </div>
  </div>
</template>

<script>
// token:
// let tokens = ['123.321', '+'] ===> [123.321, '+'] ===> [123.321, '+', '2'] ... ===> [123.321, '+', 233, '-'] ...

export default {
    name:"BasicEdition",
    data() {
        return {
            numbers: [1,2,3,4,5,6,7,8,9,0],
            inputArr: [],    //点击过的数字和符号，用于运算
            str: '',   //显示在屏幕上
            sum: 0,   //计算总值
            isOperator: false,   //是否输入了运算符
            temporary: ''    // 暂时存放的位置，当输入运算符后存入inputArr中
        }
    },
    methods:{
        clickNumber(key){
        
            console.log(key);
            // this.isOperator = false
            this.str+=key
            this.temporary+=key
           
        },
        add(e){
          this.isOperator = true
          // console.log(e.target.value);
          // this.inputArr.push(e.target.value)
          this.str+=e.target.value
          this.inputArr.push(this.temporary)
          this.inputArr.push(e.target.value)
          this.temporary = ''

        },
        sub(e){
          this.isOperator = true
          this.str+=e.target.value
          this.inputArr.push(this.temporary)
          this.inputArr.push(e.target.value)
          this.temporary = ''
        },
        multiply(e){
          this.isOperator = true
          this.str+=e.target.value
          this.inputArr.push(this.temporary)
          this.inputArr.push(e.target.value)
          this.temporary = ''
        },
        divide(e){
          this.isOperator = true
          this.str+=e.target.value
          this.inputArr.push(this.temporary)
          this.inputArr.push(e.target.value)
          this.temporary = ''
        },
        result(e){
          // console.log('=', e);
          // this.str+=e.target.textContent
          // this.sum = eval(this.str);
          if(this.temporary!==''){
            this.inputArr.push(this.temporary)
            for (var i = 0; i < this.inputArr.length; i++) {
              if (this.inputArr[i] == '*' || this.inputArr[i] == '÷') {
                if (this.inputArr[i] == '*') {
                  this.inputArr[i + 1] = parseFloat(this.inputArr[i - 1]) * parseFloat(this.inputArr[i + 1])
                }
                if (this.inputArr[i] == '÷') {
                    this.inputArr[i + 1] = parseFloat(this.inputArr[i - 1]) / parseFloat(this.inputArr[i + 1])
                }
              } else {
                if (this.inputArr[i] == '+') {
                  this.inputArr[i + 1] = parseFloat(this.inputArr[i - 1]) + parseFloat(this.inputArr[i + 1])
                }
                if (this.inputArr[i] == '-') {
                    this.inputArr[i + 1] = parseFloat(this.inputArr[i - 1]) - parseFloat(this.inputArr[i + 1])
                }
              }
              
              
            }
            this.str+=e.target.textContent
            this.sum = this.inputArr[this.inputArr.length - 1]
            this.str+=this.sum
            this.inputArr = []
            this.inputArr.push(this.sum)
            console.log(this.inputArr)
            this.temporary = ''
            // this.inputArr = []
          }
          
          
        },
        AC(){
          this.str = ''
          this.sum = 0
          this.temporary = ''
          this.inputArr = []
        },
        del(){
          this.str = this.str.slice(0,this.str.length-1)
          this.temporary = this.temporary.slice(0,this.str.length-1)
        }
    }
}


</script>


<style scoped>
.outer-frame{
  width: 300px;
  height: 500px;
  border: 2px solid rgb(174, 174, 174);
  background: rgb(192, 206, 254, 0.3);
  border-radius: 10px;
  padding: 15px;
  padding-top: 0;
}
.screen{
  height: 100px;
  width: 92%;
  margin: 0 auto;
  border-radius: 10px;
  background: rgb(255, 214, 214);
  padding: 10px;
}
.main-interface{
  display: flex;
  justify-content: space-around;
  height: 250px;
}
.number, .del{
  /* flex: 3; */
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
}
.number-btn,.other{
    width: 65px;
    height: 50px;
    background: white;
}
.symbol{
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.symbol button{
    width: 65px;
    height: 50px;
}
button{
    font-size: 26px;
    margin: 3px;
    border-radius: 10px;
    border: 1px solid rgb(207, 207, 207);
}
</style>
