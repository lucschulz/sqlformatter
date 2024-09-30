function fieldsToArray() {
    let sqlValues = document.getElementById("sqlValues").value;
    let fields = sqlValues.split("\n");
    for (let i = 0; i < fields.length; i++) {
        fields[i] = fields[i].trim();        
    }
    return fields;
}

function arrayToSqlStatement() {
    let array = fieldsToArray();
    let formattedSql = "";
    for (let i = 0; i < array.length; i++) {
        let field = array[i];
        if (field.length > 0) {
            field = "ApplicationNumber = '" + field + "' OR ";
            formattedSql += field;
        }        
    }
    formattedSql = formattedSql.substring(0, formattedSql.length - 4) + ";";
    formattedSql = "SELECT * FROM [TABLE] WHERE " + formattedSql;
    document.getElementById("formattedSql").value = formattedSql;
}