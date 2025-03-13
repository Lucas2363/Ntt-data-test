<template>
<div class="santander-main-div">
  <div class="santander-container">
    <h1 class="santander-text">OLÁ SANTANDER</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.santander-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  background-color: #b10101; 
}

.santander-main-div {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}

body {
  margin: 0;
  padding: 0;
}

.santander-text {
  color: white;
  font-size: 4rem;
  font-weight: bold; 
  text-transform: uppercase; 
  font-family: Arial, sans-serif; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>