const form = document.getElementById('order-form');
form.addEventListener('submit', book);
function book(event){
  event.preventDefault();
  var formData = new FormData(event.target);

  if (formData.get('formGroupInputSurname') == '' || 
      formData.get('formGroupInputName') == '' || 
      formData.get('formGroupInputStreet' == '' || 
      formData.get('formGroupInputHouseNumber') == '' ||
      formData.get('formGroupInputApartmentNumber') == '' ||
      formData.get('formGroupInputPhoneNumber') == '')){

    Swal.fire({
      icon: 'error',
      title: 'Вы не заполнили все обязательные* поля!'
    })
  }
  else if (formData.get('form-control-region').valueOf() == "Не выбрано"){
    Swal.fire({
      icon: 'error',
      title: 'Вы не выбрали регион проживания!'
    })
  }
  else if (formData.get('form-control-punkt') == "Не выбрано"){
    Swal.fire({
      icon: 'error',
      title: 'Вы не выбрали населенный пункт!'
    })
  }
  else {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ваш заказ успешно оформлен',
      showConfirmButton: false,
      timer: 1500
    })
    console.log('Данные о заказчике:\n\n');
  console.log('Фамилия: ' + formData.get('formGroupInputSurname') + '\n');
  console.log('Имя: ' + formData.get('formGroupInputName') + '\n');
  console.log('Отчество: ' + formData.get('formGroupInputMiddlename') + '\n');
  console.log('Улица: ' + formData.get('formGroupInputStreet') + '\n');
  console.log('Фамилия: ' + formData.get('formGroupInputSurname') + '\n');

  console.log('Регион: ' + formData.get('form-control-region') + '\n');
  console.log('Населенный пункт: ' + formData.get('form-control-punkt') + '\n');
  
  console.log('Дом: ' + formData.get('formGroupInputHouseNumber') + '\n');
  console.log('Квартира: ' + formData.get('formGroupInputApartmentNumber') + '\n');
  console.log('Номер телефона: ' + formData.get('formGroupInputPhoneNumber') + '\n'); 
  }
}