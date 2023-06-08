function generateEmployeeData() {
    var employees = [];
  
    for (var i = 1; i <= 50; i++) {
      var emp_id = i;
      var name = "Employee " + emp_id;
      var dept = "Department " + Math.floor(Math.random() * 5) + 1;
      var address = "Address " + emp_id + ", City";
      var latitude = Math.random() * (90 - (-90)) + (-90);
      var longitude = Math.random() * (180 - (-180)) + (-180);
  
      employees.push({ emp_id, name, dept, address, latitude, longitude });
    }
  
    return employees;
  }
  
  function createMarkerCluster(employees) {
    var map = L.map("map").setView([0, 0], 2);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(map);
  
    var markers = L.markerClusterGroup();
  
    employees.forEach(function (employee) {
      var marker = L.marker([employee.latitude, employee.longitude])
        .bindPopup(
          "<b>Employee ID:</b> <a href='#'>" +
            employee.emp_id +
            "</a><br>" +
            "<b>Name:</b> " +
            employee.name +
            "<br>" +
            "<b>Department:</b> " +
            employee.dept +
            "<br>" +
            "<b>Address:</b> " +
            employee.address
        )
        .addTo(markers);
    });
  
    map.addLayer(markers);
  }
  
  var employees = generateEmployeeData();
  createMarkerCluster(employees);
  