<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    :class="`fill-current ${wrapperClass || ''}`"
  >
    <path
      fill="var(--90)"
      d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
    ></path>
  </svg>
</template>
<script>
export default {
  props: ['wrapperClass'],
};
</script>
