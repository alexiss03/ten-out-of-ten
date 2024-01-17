<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue.js 3x3 Grid</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <style>
    /* Add any styling you want for your grid here */
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .grid-item {
      border: 1px solid #ccc;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>

<div id="app">
  <div class="grid">
    <div v-for="item in items" :key="item.id" class="grid-item">
      {{ item.content }}
    </div>
  </div>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      items: [
        { id: 1, content: 'Item 1' },
        { id: 2, content: 'Item 2' },
        { id: 3, content: 'Item 3' },
        { id: 4, content: 'Item 4' },
        { id: 5, content: 'Item 5' },
        { id: 6, content: 'Item 6' },
        { id: 7, content: 'Item 7' },
        { id: 8, content: 'Item 8' },
        { id: 9, content: 'Item 9' },
      ],
    },
  });
</script>

</body>
</html>