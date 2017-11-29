/**
 * Skills
 *
 * Created by Alex Elkin on 22.11.2017.
 */

const skills = [
    {
        titleId: "skills.java",
        commentId: "skills.java_comment",
        descriptionId: "skills.java_description",
        defaultTitle: "Java Development",
        level: 90,
        skills: [
            {
                titleId: "skills.java.se-ee",
                defaultTitle: "Java SE/Java EE",
                descriptionId: "skills.java.se-ee_description",
                level: 90,
                href: "http://www.oracle.com/technetwork/java/javaee/overview/index.html"
            }, {
                titleId: "skills.java.spring",
                defaultTitle: "Spring Framework",
                descriptionId: "skills.java.spring_description",
                level: 90,
                href: "http://spring.io"
            }, {
                titleId: "skills.java.hibernate",
                defaultTitle: "Hibernate",
                descriptionId: "skills.java.hibernate_description",
                level: 70,
                href: "http://hibernate.org"
            }, {
                titleId: "skills.java.jpa",
                defaultTitle: "Java Persistence Api",
                descriptionId: "skills.java.jpa_description",
                level: 70,
                href: "http://hibernate.org"
            }, {
                titleId: "skills.java.rxjava",
                defaultTitle: "RxJava",
                descriptionId: "skills.java.rxjava_description",
                level: 70,
                href: "http://reactivex.io"
            }, {
                titleId: "skills.java.thymeleaf",
                defaultTitle: "Thymeleaf",
                descriptionId: "skills.java.thymeleaf_description",
                level: 40,
                href: "http://www.thymeleaf.org"
            }, {
                titleId: "skills.java.java-streams",
                defaultTitle: "Java 8 Stream Api",
                descriptionId: "skills.java.java-streams_description",
                level: 60,
                href: "http://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html"
            }, {
                titleId: "skills.java.java-lambda",
                defaultTitle: "Java Lambda Expressions",
                descriptionId: "skills.java.java-lambda_description",
                level: 90,
                href: "http://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html"
            }, {
                titleId: "skills.java.java-generics",
                defaultTitle: "Java Generics",
                descriptionId: "skills.java.java-generics_description",
                level: 80,
                href: "http://en.wikipedia.org/wiki/Generics_in_Java"
            }, {
                titleId: "skills.java.java-reflection",
                defaultTitle: "Java Reflection API",
                descriptionId: "skills.java.java-reflection_description",
                level: 40,
                href: "https://docs.oracle.com/javase/tutorial/reflect"
            }
        ],
        groups: [
            {
                titleId: "skills.java.libraries",
                defaultTitle: "Java Libraries",
                level: 70,
                skills: [
                    {
                        titleId: "skills.java.libraries.jasper-reports",
                        defaultTitle: "JasperReports",
                        descriptionId: "skills.java.libraries.jasper-reports_description",
                        level: 70,
                        href: "https://community.jaspersoft.com"
                    }, {
                        titleId: "skills.java.libraries.freemarker",
                        defaultTitle: "FreeMarker",
                        descriptionId: "skills.java.libraries.freemarker_description",
                        level: 50,
                        href: "http://freemarker.org"
                    }, {
                        titleId: "skills.java.libraries.jackson",
                        defaultTitle: "Jackson",
                        descriptionId: "skills.java.libraries.jackson_description",
                        level: 90,
                        href: "http://wiki.fasterxml.com/JacksonHome"
                    }
                ]
            }, {
                titleId: "skills.java.app-servers",
                defaultTitle: "Application Servers",
                level: 50,
                skills: [
                    {
                        titleId: "skills.java.app-servers.wildfly",
                        defaultTitle: "WildFly",
                        descriptionId: "skills.java.app-servers.wildfly_description",
                        level: 50,
                        href: "http://wildfly.org"
                    }, {
                        titleId: "skills.java.app-servers.tomcat",
                        defaultTitle: "Apache Tomcat",
                        descriptionId: "skills.java.app-servers.tomcat_description",
                        level: 40,
                        href: "http://tomcat.apache.org/"
                    }
                ]
            }, {
                titleId: "skills.java.build-tools",
                commentId: "skills.java.build-tools_comment",
                defaultTitle: "Build Automation Tools",
                level: 50,
                skills: [
                    {
                        titleId: "skills.java.build-tools.maven",
                        defaultTitle: "Maven",
                        descriptionId: "skills.java.build-tools.maven_description",
                        level: 80,
                        href: "http://maven.apache.org"
                    }, {
                        titleId: "skills.java.build-tools.gradle",
                        defaultTitle: "Gradle",
                        descriptionId: "skills.java.build-tools.gradle_description",
                        level: 40,
                        href: "http://gradle.org"
                    }, {
                        titleId: "skills.java.build-tools.ant",
                        defaultTitle: "Ant",
                        descriptionId: "skills.java.build-tools.ant_description",
                        level: 20,
                        href: "http://ant.apache.org"
                    }
                ]
            }, {
                titleId: "skills.java.testing",
                defaultTitle: "Testing Frameworks",
                level: 40,
                skills: [
                    {
                        titleId: "skills.java.testing.junit",
                        defaultTitle: "JUnit",
                        descriptionId: "skills.java.testing.junit_description",
                        level: 30,
                        href: "http://junit.org"
                    }, {
                        titleId: "skills.java.testing.mockito",
                        defaultTitle: "Mockito",
                        descriptionId: "skills.java.testing.mockito_description",
                        level: 60,
                        href: "http://site.mockito.org"
                    },
                ]
            }
        ]
    }, {
        titleId: "skills.web",
        commentId : "skills.web_comment",
        defaultTitle: "Web Development",
        level: 70,
        skills: [
            {
                titleId: "skills.web.react",
                descriptionId: "skills.web.react_description",
                defaultTitle: "React",
                level: 90,
                href: "https://facebook.github.io/react"
            }, {
                titleId: "skills.web.redux",
                descriptionId: "skills.web.redux_description",
                defaultTitle: "Redux",
                level: 80,
                href: "http://redux.js.org"
            }, {
                titleId: "skills.web.html",
                descriptionId: "skills.web.html_description",
                defaultTitle: "HTML",
                level: 70,
                href: "https://www.w3schools.com/html/"
            }, {
                titleId: "skills.web.css",
                descriptionId: "skills.web.css_description",
                defaultTitle: "CSS3",
                level: 80,
                href: "http://www.w3schools.com/css/"
            }, {
                titleId: "skills.web.js",
                descriptionId: "skills.web.js_description",
                defaultTitle: "JavaScript",
                level: 60,
                href: "http://www.w3schools.com/js/default.asp"
            }, {
                titleId: "skills.web.es6",
                descriptionId: "skills.web.es6_description",
                defaultTitle: "ES6",
                level: 60,
                href: "https://es6.io"
            }
        ],
        groups: [
            {
                titleId: "skills.web.libraries",
                defaultTitle: "Web Libraries",
                level: 40,
                skills: [
                    {
                        titleId: "skills.web.libraries.rxjs",
                        descriptionId: "skills.web.libraries.rxjs_description",
                        defaultTitle: "RxJS",
                        level: 30,
                        href: "http://reactivex.io/rxjs/"
                    }, {
                        titleId: "skills.web.libraries.semantic-ui",
                        descriptionId: "skills.web.libraries.semantic-ui_description",
                        defaultTitle: "Semantic UI React",
                        level: 40,
                        href: "https://react.semantic-ui.com"
                    }, {
                        titleId: "skills.web.libraries.material-ui",
                        descriptionId: "skills.web.libraries.material-ui_description",
                        defaultTitle: "Material-UI",
                        level: 40,
                        href: "http://www.material-ui.com"
                    }, {
                        titleId: "skills.web.libraries.redux-thunk",
                        descriptionId: "skills.web.libraries.redux-thunk_description",
                        defaultTitle: "Redux Thunk",
                        level: 50,
                        href: "https://github.com/gaearon/redux-thunk"
                    }, {
                        titleId: "skills.web.libraries.react-router",
                        descriptionId: "skills.web.libraries.react-router_description",
                        defaultTitle: "React Router",
                        level: 50,
                        href: "https://github.com/ReactTraining/react-router"
                    }, {
                        titleId: "skills.web.libraries.react-intl",
                        descriptionId: "skills.web.libraries.react-intl_description",
                        defaultTitle: "React Intl",
                        level: 50,
                        href: "https://github.com/yahoo/react-intl"
                    }, {
                        titleId: "skills.web.libraries.react-table",
                        descriptionId: "skills.web.libraries.react-table_description",
                        defaultTitle: "React Table",
                        level: 80,
                        href: "https://react-table.js.org"
                    }, {
                        titleId: "skills.web.libraries.sockjs",
                        descriptionId: "skills.web.libraries.sockjs_description",
                        defaultTitle: "SockJS",
                        level: 50,
                        href: "http://github.com/sockjs/sockjs-client"
                    }, {
                        titleId: "skills.web.libraries.stomp",
                        descriptionId: "skills.web.libraries.stomp_description",
                        defaultTitle: "STOMP",
                        level: 50,
                        href: "http://jmesnil.net/stomp-websocket/doc"
                    }, {
                        titleId: "skills.web.libraries.jquery",
                        descriptionId: "skills.web.libraries.jquery_description",
                        defaultTitle: "JQuery",
                        level: 30,
                        href: "https://jquery.com"
                    }, {
                        titleId: "skills.web.libraries.chartjs",
                        descriptionId: "skills.web.libraries.chartjs_description",
                        defaultTitle: "Chart.js",
                        level: 60,
                        href: "http://www.chartjs.org"
                    }, {
                        titleId: "skills.web.libraries.normalizr",
                        descriptionId: "skills.web.libraries.normalizr_description",
                        defaultTitle: "normalizr",
                        level: 70,
                        href: "http://github.com/paularmstrong/normalizr"
                    }
                ]
            }, {
                titleId: "skills.web.project-tools",
                defaultTitle: "Web Project Tools",
                level: 30,
                skills: [
                    {
                        titleId: "skills.web.project-tools.npm",
                        descriptionId: "skills.web.project-tools.npm_description",
                        defaultTitle: "Node Package Manager (npm)",
                        level: 20,
                        href: "https://www.npmjs.com/"
                    }, {
                        titleId: "skills.web.project-tools.yarn",
                        descriptionId: "skills.web.project-tools.yarn_description",
                        defaultTitle: "Yarn",
                        level: 30,
                        href: "https://yarnpkg.com"
                    }
                ]
            }
        ]
    }, {
        titleId: "skills.android",
        commentId: "skills.android_comment",
        descriptionId: "skills.android_description",
        defaultTitle: "Android Development",
        level: 50,
        skills: [
            {
                titleId: "skills.android.dagger",
                descriptionId: "skills.android.dagger_description",
                defaultTitle: "Dagger 2",
                level: 30,
                href: "https://google.github.io/dagger"
            }, {
                titleId: "skills.android.arch-components",
                descriptionId: "skills.android.arch-components_description",
                defaultTitle: "Android Architecture Components",
                level: 30,
                href: "https://developer.android.com/topic/libraries/architecture/index.html"
            }, {
                titleId: "skills.android.data-binding",
                descriptionId: "skills.android.data-binding_description",
                defaultTitle: "Data Binding Library",
                level: 40,
                href: "https://developer.android.com/topic/libraries/data-binding/index.html"
            }
        ]
    }, {
        titleId: "skills.c-sharp",
        descriptionId: "skills.c-sharp_description",
        commentId: "skills.c-sharp_comment",
        defaultTitle: "C# Development",
        level: 40
    }, {
        titleId: "skills.databases",
        defaultTitle: "Databases",
        level: 40,
        skills: [
            {
                titleId: "skills.databases.sql",
                descriptionId: "skills.databases.sql_description",
                defaultTitle: "SQL",
                level: 60,
                href: "https://www.w3schools.com/sql"
            }, {
                titleId: "skills.databases.sqlite",
                descriptionId: "skills.databases.sqlite_description",
                defaultTitle: "SQLite",
                level: 90,
                href: "https://www.sqlite.org"
            }, {
                titleId: "skills.databases.postgresql",
                descriptionId: "skills.databases.postgresql_description",
                defaultTitle: "PostgreSQL",
                level: 50,
                href: "https://www.postgresql.org/"
            }, {
                titleId: "skills.databases.mysql",
                descriptionId: "skills.databases.mysql_description",
                defaultTitle: "MySQL",
                level: 30,
                href: "https://www.mysql.com/"
            },
        ]
    }, {
        titleId: "skills.vcs",
        defaultTitle: "Version Control Systems",
        level: 70,
        skills: [
            {
                titleId: "skills.vcs.git",
                descriptionId: "skills.vcs.git_description",
                defaultTitle: "Git",
                level: 90,
                href: "https://git-scm.com"
            }, {
                titleId: "skills.vcs.svn",
                descriptionId: "skills.vcs.svn_description",
                defaultTitle: "SVN",
                level: 20,
                href: "http://subversion.apache.org"
            },
        ]
    }, {
        titleId: "skills.os",
        commentId: "skills.os_comment",
        defaultTitle: "Software Operating Systems",
        level: 70,
        skills: [
            {
                titleId: "skills.os.linux",
                descriptionId: "skills.os.linux_description",
                defaultTitle: "Linux",
                level: 60,
                href: "https://www.ubuntu.com/"
            }, {
                titleId: "skills.os.windows",
                descriptionId: "skills.os.windows_description",
                defaultTitle: "Windows",
                level: 60,
                href: "http://www.microsoft.com/en-us/windows/"
            }
        ]
    }, {
        titleId: "skills.scada",
        descriptionId: "skills.scada_description",
        commentId: "skills.scada_comment",
        defaultTitle: "SCADA Development",
        level: 40,
        skills: [
            {
                titleId: "skills.scada.ms3",
                descriptionId: "skills.scada.ms3_description",
                defaultTitle: "Master SCADA 3.x",
                level: 60,
                href: "http://insat.ru"
            }, {
                titleId: "skills.scada.ms4",
                descriptionId: "skills.scada.ms4_description",
                defaultTitle: "Master SCADA 4D",
                level: 30,
                href: "http://insat.ru"
            }, {
                titleId: "skills.scada.universal-opc",
                descriptionId: "skills.scada.universal-opc_description",
                defaultTitle: "Universal Master OPC Server",
                level: 90,
                href: "http://insat.ru"
            }
        ]
    }, {
        titleId: "skills.other",
        defaultTitle: "C/C++, Assembler, Perl etc.",
        level: 20,
        skills: [
            {
                titleId: "skills.other.cpp",
                descriptionId: "skills.other.cpp_description",
                defaultTitle: "C/C++",
                level: 20
            }, {
                titleId: "skills.other.perl",
                descriptionId: "skills.other.perl_description",
                defaultTitle: "Perl",
                level: 40
            }, {
                titleId: "skills.other.assembler",
                descriptionId: "skills.other.assembler_description",
                defaultTitle: "Assembler",
                level: 10
            }
        ]
    }
];

export default skills;
