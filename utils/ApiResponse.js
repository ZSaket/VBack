class ApiResponse{
    constructor(statusCode, data, messgae = "Success"){
        this.statusCode = statusCode
        this.data = datathis.messgae = messgae
        this.success = statusCode < 400
    }
}