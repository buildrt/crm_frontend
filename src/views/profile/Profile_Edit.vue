<template>
  <div>
    <div id="light" class="white_content">
      <form action="#" method="get" @submit="checkEdit">
        <table>
          <tr>
            <td>
              <label for="iname">姓名</label>
            </td>
            <td>
              <input type="text" name="name" id="iname" :value="dname">
            </td>
            <td>
              <label>性别</label>
            </td>
            <td>
              <select name="gender" id="igender">
                <option value="请选择">--请选择--</option>
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="iphone">手机号</label>
            </td>
            <td>
              <input type="tel" name="phone" id="iphone" :value="dphone">
            </td>
            <td>
              <label for="iemail">邮箱</label>
            </td>
            <td>
              <input type="email" name="email" id="iemail" :value="demail">
            </td>
          </tr>
          <tr>
            <td>
              <button id="sub" @click = "checkEdit">保存</button>
            </td>
            <td>
              <button id="back" @click = "backDiv" >取消</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
    <div id="fade" class="black_overlay"></div>
  </div>
</template>

<script>
  export default {
    name: "Profile_Edit",
    props: {
      ename: String,
      egender: String,
      ephone: String,
      eemail: String,
    },
    data() {
      return {
        dname: this.ename,
        dgender: this.egender,
        dphone: this.ephone,
        demail: this.eemail,
      }
    },
    methods: {
      backDiv(event) {
        event.preventDefault();
        document.getElementById('light').style.display='none';
        document.getElementById('fade').style.display='none';
      },
      checkEdit(event) {
        const piname = document.getElementById('iname');
        const piphone = document.getElementById('iphone');
        const piemail = document.getElementById('iemail');
        const pigender = document.getElementById('igender');
        if ((piname.value !== this.ename || piphone.value !== this.ephone || piemail.value !== this.eemail) && (pigender.value !== '请选择' && pigender.value !== this.egender)) {
          this.form.submit();
        }else {
          event.preventDefault();
        }
      }
    }
  }
</script>

<style scoped>
  td {
    font-size: 16px;
    text-align: left;
    width: 100px;
  }
  tr {
    height: 60px;
  }
  input {
    height: 25px;
    color: #575757;
    margin-right: 30px;
    margin-left: -30px;
  }
  select {
    color: #575757;
    margin-left: -30px;
  }
  #sub, #back {
    position: absolute;
    top: 85%;
    background-color: #1E90FF;
    font-size: 16px;
    color: white;
    border: 0;
    width: 50px;
    height: 30px;
  }
  table {
    position: absolute;
    top: 20%;
    left: 8%;
  }
  #sub {
    position: absolute;
    left: 70%;
  }
  #back {
    position: absolute;
    left: 82%;
  }
</style>
