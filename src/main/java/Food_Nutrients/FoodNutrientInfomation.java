package Food_Nutrients;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.sql.DataSource;

import Utils.SQLUtil;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
public class FoodNutrientInfomation{
	private static FoodNutrientInfomation _instance = null;
	/** 메세지 로그용. */
	private static Logger _log = Logger.getLogger(FoodNutrientInfomation.class.getName());

	/**
	 * @return FoodNutrientInfomation
	 */
	public static FoodNutrientInfomation getInstance() {
		if (_instance == null) {
			if (_instance == null) {
				_instance = new FoodNutrientInfomation();
			}
		}
		return _instance;
	}

	private FoodNutrientInfomation() {

	}

	public HashMap<String, Object> getFoodNutrientList() {
		if (foodNutrientList != null)
			return foodNutrientList;
		foodNutrientList = load();
		return foodNutrientList;
	}

	static HashMap<String, Object> foodNutrientList = null;

	public static HashMap<String, Object> load() {
		Connection con = null;
		PreparedStatement pstm = null;
		ResultSet rs = null;
		foodNutrientList = new HashMap<String, Object>();
		List<FoodNutrient> lm = new ArrayList<>();
		try {
			Context context = null;
			DataSource source = null;
			try {
				context = new InitialContext();
				source = (DataSource) context.lookup("java:comp/env/jdbc/mariadb");
			} catch (NamingException e) {
				e.printStackTrace();
			}
			// lookup(): 등록된 naming 서비스로부터 자원을 찾고자할 때 사용하는 메서드
			// context 객체를 통해 이름으로 Resource를 획득한다.
			// ("jdbc/myconn"): JNDI 서비스에 접근하기 위한 기본 이름(이 자원을 찾겠다.--> web.xml의
			// <res-ref-name>
			// JNDI의 모든 이름은 기본적으로 java:comp/env에 등록되어 있다.
			// 해당 영역에서 jdbc/myconn으로 설정된 이름을 획득한다.

			con = source.getConnection();
			String sqlstr = "SELECT * FROM food_nutrients LIMIT 1000";
			pstm = con.prepareStatement(sqlstr);
			rs = pstm.executeQuery();
			while (rs.next()) {
				FoodNutrient foodNutrient = new FoodNutrient();
				foodNutrient.setNo(rs.getInt("no"));
				foodNutrient.setFoodName(rs.getString("food_name"));
				foodNutrient.setEnergy(rs.getDouble("energy"));
				foodNutrient.setProtein(rs.getDouble("protein"));
				foodNutrient.setFat(rs.getDouble("fat"));
				foodNutrient.setCarbohydrate(rs.getDouble("carbohydrate"));
				lm.add(foodNutrient);
			}
			foodNutrientList.put("data", lm);
		} catch (SQLException e) {
			_log.log(Level.SEVERE, e.getLocalizedMessage(), e);
		} finally {
			SQLUtil.close(rs);
			SQLUtil.close(pstm);
			SQLUtil.close(con);
		}
		return foodNutrientList;
	}
}
