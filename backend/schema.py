import strawberry
from typing import List

@strawberry.input
class IngredientInput:
    name: str
    quantity: str

@strawberry.type
class Ingredient:
    name: str
    quantity: str

@strawberry.type
class Recipe:
    id: int
    title: str
    ingredients: List[Ingredient]
    steps: List[str]
    category: str

recipes_db = []

@strawberry.type
class Query:
    @strawberry.field
    def get_recipes(self, category: str = None) -> List[Recipe]:
        if category:
            return [r for r in recipes_db if r.category == category]
        return recipes_db

@strawberry.type
class Mutation:
    @strawberry.mutation
    def add_recipe(
        self,
        title: str,
        ingredients: List[IngredientInput],
        steps: List[str],
        category: str
    ) -> Recipe:
        new_ingredients = [Ingredient(name=i.name, quantity=i.quantity) for i in ingredients]
        new_recipe = Recipe(
            id=len(recipes_db) + 1,
            title=title,
            ingredients=new_ingredients,
            steps=steps,
            category=category
        )
        recipes_db.append(new_recipe)
        return new_recipe

schema = strawberry.Schema(query=Query, mutation=Mutation)
