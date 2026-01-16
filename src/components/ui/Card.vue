<template>
  <div class="card">
    <header>
      <img src="@/assets/img/3.png" />
    </header>
    <div>
      <h6>
        <slot name="title"></slot>
      </h6>
      <p>
        <slot name="desc"></slot>
      </p>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.card {
  border: 1px solid #444;
  p {
    font-size: 0.5rem;
  }
}
</style>
