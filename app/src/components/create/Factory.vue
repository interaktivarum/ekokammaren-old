
<script>

  export default {
    Comparison: function () {
      return {
        header: "",
        description: "",
        columns: [this.Column(),this.Column()]
      }
    },
    Column: function () {
      return {
        header: "",
        color: "lightgray",
        items: [this.Item()]
      }
    },
    ColumnCopy: function (data) {
      return {
        header: data.header,
        color: data.color,
        items: data.items
      }
    },
    Item: function () {
      return {
        href: ""
      }
    }
  }

</script>
