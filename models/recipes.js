const dynamoose = require("dynamoose");

const recipeSchema = new dynamoose.Schema(
  {
    id: { type: Number, required: true },
    dishName: { type: String, required: true },
    ingredients: {
      type: Array,
      schema: [
        {
          type: Object,
          schema: {
            name: { type: String, required: true },
            quantity: { type: String, required: true },
            measurementType: { type: String, required: true },
          },
        },
      ],
    },
    servingSize: { type: Number, required: true },
  },
  {
    saveUnknown: false,
    timestamps: true,
  }
);

module.exports = dynamoose.model("Recipe", recipeSchema);
