<template>
    <div>
        <div class="p f-1 color-20 text-primary">hello World</div>
        <div class="p f-2 color-40">hello World</div>
        <div class="p f-3 color-60 text-success">hello World</div>
        <div class="p f-4 color-80">hello World</div>
        <div class="p f-5 color-100">hello World</div>
        <div class="p f-6 text-warning">hello World</div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
/* for */

/* 用 through 到 max 值 結束 */

$max: 6;
@for $i from 1 through $max {
  .f-#{$i} {
    font-size: ($max - $i + 1) * 10px;
  }
}

/* while */

$color: #000000;
$amount: 20;
@while $amount <= 100 {
  .color-#{$amount} {
    background-color: lighten($color, $amount * 1%);
  }
  $amount: $amount + 20;
}

/* if */
$device: mobile;

p {
  @if $device == desktop {
    font-size: 1.5rem;
  } @else if $device == pad {
    font-size: 1.25rem;
  } @else {
    font-size: 1rem;
  }
  color: red;
}

/* map */

$theme-colors: (
  primary: #0000ff,
  success: #008000,
  warning: #ffff00,
  danger: #ff0000,
);

@each $key, $value in $theme-colors {
  .text-#{$key} {
    color: $value;
  }
}
</style>
