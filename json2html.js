// json2html.js
export default function json2html(data) {
    // Extract columns from data (Name, Age, Gender)
    const columns = ["Name", "Age", "Gender"];
    
    // Start building the HTML table
    let html = `<table data-user="ammapuramkhanishram@gmail.com">`;
    html += "<thead><tr>";

    // Add table headers
    columns.forEach(col => {
        html += `<th>${col}</th>`;
    });
    html += "</tr></thead>";

    // Add table rows
    html += "<tbody>";
    data.forEach(row => {
        html += "<tr>";
        columns.forEach(col => {
            html += `<td>${row[col] || ""}</td>`;
        });
        html += "</tr>";
    });
    html += "</tbody></table>";

    return html;
}
