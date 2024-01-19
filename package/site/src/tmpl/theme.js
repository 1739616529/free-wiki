const TEXT_COLOR = "#4876f3";

// 大屏端
export const big_screen_theme = {
    token: {
        borderRadius: 3,
        colorBgContainer: "#0a234f",
        colorBorder: "#263b67",
        colorText: TEXT_COLOR,
        colorBgElevated: "#0a234f",
        colorTextPlaceholder: TEXT_COLOR,
        controlItemBgActive: "rgba(72, 118, 243, 0.5)",
        colorBorderSecondary: "rgba(0,0,0,0)",
        colorBgLayout: "#041632",
        colorTextLabel: "#387ed5",
        colorTextQuaternary: TEXT_COLOR,
    },
    components: {
        DatePicker: {
            colorIcon: TEXT_COLOR,
        },
        Select: {
            colorIcon: TEXT_COLOR,
        },
        Modal: {
            colorIcon: "#FFF",
        },
        Table: {
            colorIcon: "#fffff",
        },
    },
};

export const default_theme = {
    token: {
        borderRadius: 3,
        // fontFamily: "DINPro",
        fontFamily: "Ping Fang SC",
    },
};
