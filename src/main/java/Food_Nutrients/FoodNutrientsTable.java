package Food_Nutrients;

import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("jsonschema2pojo")
public class FoodNutrientsTable {

	@SerializedName("food_nutrients")
	@Expose
	private List<FoodNutrient> foodNutrients;

	public List<FoodNutrient> getFoodNutrients() {
		return foodNutrients;
	}

	public void setFoodNutrients(List<FoodNutrient> foodNutrients) {
		this.foodNutrients = foodNutrients;
	}

}