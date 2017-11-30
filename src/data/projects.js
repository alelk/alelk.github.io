/**
 * Projects
 *
 * Created by Alex Elkin on 30.11.2017.
 */

import bcmsLogo from '../img/bcms-logo.png'
import bcptLogo from '../img/bcpt-logo.png'
import opcBridgeLogo from '../img/opc-bridge-logo.png'
import viLogo from '../img/vi-logo.png'
import pwsLogo from '../img/pwsongs-logo.png'

export const projects = [
    {
        titleId: "projects.bcpt",
        descriptionId: "projects.bcpt_description",
        defaultTitle: "Blood Centre Product Tracker",
        img: bcptLogo
    }, {
        titleId: "projects.bcms",
        descriptionId: "projects.bcms_description",
        defaultTitle: "Blood Centre Management System",
        img: bcmsLogo
    }, {
        titleId: "projects.opc-bridge",
        descriptionId: "projects.opc-bridge_description",
        defaultTitle: "OPC Bridge Server",
        img: opcBridgeLogo
    }, {
        titleId: "projects.pwsongs",
        descriptionId: "projects.pwsongs_description",
        defaultTitle: "P&W Songs for Android",
        img: pwsLogo,
        links: [
            {
                titleId: "projects.pwsongs.lnk.googleplay",
                defaultTitle: "Google Play",
                href: "https://play.google.com/store/apps/details?id=com.alelk.pws.pwapp",
                target: "_blank"
            }
        ]
    }, {
        titleId: "projects.vi",
        descriptionId: "projects.vi_description",
        defaultTitle: "Virus Inactivation App",
        img: viLogo
    }
];