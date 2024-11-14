const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

router.get("/", getAllRecipes); // GET /recipes
router.get("/:id", getRecipeById); // GET /recipes/:id
router.post("/", addRecipe); // POST /recipes
router.put("/:id", updateRecipe); // PUT /recipes/:id
router.delete("/:id", deleteRecipe); // DELETE /recipes/:id

module.exports = router;
