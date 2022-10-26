let userUnknownInput: unknown;
let userKnownInput: string | number;

userUnknownInput = 'Max';
userUnknownInput = 5;
userKnownInput = 'Musa';
//userKnownInput = userUnknownInput //error because we don't know what type is userUnknownInput

//NEVER TYPE
function generateError(message: string, code: number): never {//never return anything
  throw { message: message, errorCode: code };
  // while (true) {} //will also work
}
// generateError('An error occurred!', 500);