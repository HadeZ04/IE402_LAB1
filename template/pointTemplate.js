export var point_template_tree = {
  title: "{Name}",
  content: "Cây này ở <b>{Location}</b>.",
};

export var point_template_light = {
  title: "{Name}",
  content: "Bóng đèn này ở <b>{Location}</b>.",
};

export var point_template_chair = {
  title: "{Name}",
  content: "Cái ghế này ở <b>{Location}</b>.",
};

export var point_template_area = {
  title: "{Name}",
  content: "<b>{Location}</b>.",
};

export var point_template_university = {
  title: "{Name}",
  content: `
    <div>
      <p><b>Tên trường:</b> {Name}</p>
      <p><b>Địa điểm:</b> {Location}</p>
      <p><b>Năm thành lập:</b> {NamThanhLap}</p>
      <p><b>Ngành đào tạo:</b> {Nganh}</p>
      <p><b>Số sinh viên:</b> {SoSV}</p>
    </div>
  `,
};

export var point_template_city = {
  title: "{Name}",
  content: "Thành phố ở <b>{Location}</b>.",
};

export var line_template = {
  title: "{Name}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "Length",
          label: "Chiều dài (km)",
          visible: true,
        },
        {
          fieldName: "Width",
          label: "Lộ giới (m)",
          visible: true,
        },
        {
          fieldName: "Location",
          label: "Thông tin các tỉnh đi qua",
          visible: true,
        },
      ],
    },
  ],
};

export var info_province_template = {
  title: "{PROVINCE_NAME}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "PROVINCE_AREA",
          label: "Area (km2)",
          isEditable: true,
          tooltip: "",
          visible: true,
          format: {
            places: 2,
            digitSeparator: true,
          },
          stringFieldOption: "text-box",
        },
        {
          fieldName: "PROVINCE_POPULATION",
          label: "Polulation (2021)",
          isEditable: true,
          tooltip: "",
          visible: true,
          format: {
            digitSeparator: true,
          },
          stringFieldOption: "text-box",
        },
      ],
    },
  ],
};
