$(document).ready(function() {
	$('.dataTable').DataTable({
		ordering: true, // ordering 활성화
		order: [[0, "asc"]], //0번째 컬럼 오름차순
		paging: true, //페이징 기능 활성화. 기본이 true
		pagingType: "full_numbers", // 페이징 버튼 타입 설정
		pageLength: 10, // 한페이지에 보여주는 데이터 개수 
		responsive: true, // 스크립트를 추가하면 반응형으로 작동하게해줌
		lengthChange: false, // pageLength 조절 불가하게 해줌
		info: true, // 페이지 상태표시
		autoWidth: false, //페이지 좌우 크기 조절시 테이블 크기 자동 적용
		serverSide: false,
		processing: true, // 서버와 통신 시 응답을 받기 전이라는 ui를 띄울 것인지 여부

		ajax: {
			url: "loadFoodNutrientsList",
			type: "GET",
			dataType: "json",
			dataSrc: 'data'
		},
		columns: [
			{ data: "no" },
			{ data: "food_name" },
			{ data: "energy" },
			{ data: "protein" },
			{ data: "fat" },
			{ data: "carbohydrate" }
		],
	})
});