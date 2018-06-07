function fieldsToArray() {
    var sqlValues = document.getElementById("sqlValues").value;
    var fields = sqlValues.split("\n");

    for (let i = 0; i < fields.length; i++) {
        fields[i] = fields[i].trim();        
    }
    return fields;
}

function arrayToSqlStatement() {
    var array = fieldsToArray();
    var formattedSql = "";
    for (let i = 0; i < array.length; i++) {
        var field = array[i];
        if (field.length > 0) {
            field = "ApplicationNumber = '" + field + "' OR ";
            formattedSql += field;
        }        
    }

    formattedSql = formattedSql.substring(0, formattedSql.length - 4) + ";";
    formattedSql = "SELECT * FROM [TABLE] WHERE " + formattedSql;
    document.getElementById("formattedSql").value = formattedSql;
}