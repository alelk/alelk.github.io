/**
 * Skills
 *
 * Created by Alex Elkin on 22.11.2017.
 */

const skills = [
    {
        titleId: "skills.java",
        commentId: "skills.java_comment",
        defaultTitle: "Java Development",
        level: 90,
        skills: [
            {
                titleId: "skills.java.se-ee",
                defaultTitle: "Java SE/Java EE",
                level: 90,
                href: "http://www.oracle.com/technetwork/java/javaee/overview/index.html"
            }, {
                titleId: "skills.java.spring",
                defaultTitle: "Spring Framework",
                level: 90,
                href: "http://spring.io"
            }, {
                titleId: "skills.java.hibernate",
                defaultTitle: "Hibernate",
                level: 70,
                href: "http://hibernate.org"
            }, {
                titleId: "skills.java.rxjava",
                defaultTitle: "RxJava",
                level: 70,
                href: "http://reactivex.io"
            }, {
                titleId: "skills.java.thymeleaf",
                defaultTitle: "Thymeleaf",
                level: 40,
                href: "http://www.thymeleaf.org"
            }, {
                titleId: "skills.java.java-streams",
                defaultTitle: "Java 8 Stream Api",
                level: 60,
                href: "http://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html"
            }, {
                titleId: "skills.java.java-lambda",
                defaultTitle: "Java Lambda Expressions",
                level: 90,
                href: "http://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html"
            }, {
                titleId: "skills.java.java-generics",
                defaultTitle: "Java Generics",
                level: 80,
                href: "http://en.wikipedia.org/wiki/Generics_in_Java"
            }, {
                titleId: "skills.java.java-reflection",
                defaultTitle: "Java Reflection API",
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
                        level: 70,
                        href: "https://community.jaspersoft.com"
                    }, {
                        titleId: "skills.java.libraries.freemarker",
                        defaultTitle: "FreeMarker",
                        level: 50,
                        href: "http://freemarker.org"
                    }, {
                        titleId: "skills.java.libraries.jackson",
                        defaultTitle: "Jackson",
                        level: 90,
                        href: "http://wiki.fasterxml.com/JacksonHome"
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
                        level: 80,
                        href: "http://maven.apache.org"
                    }, {
                        titleId: "skills.java.build-tools.gradle",
                        defaultTitle: "Gradle",
                        level: 40,
                        href: "http://gradle.org"
                    }, {
                        titleId: "skills.java.build-tools.ant",
                        defaultTitle: "Ant",
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
                        level: 30,
                        href: "http://junit.org"
                    }, {
                        titleId: "skills.java.testing.mockito",
                        defaultTitle: "Mockito",
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
                defaultTitle: "React",
                level: 90,
                href: "https://facebook.github.io/react"
            }, {
                titleId: "skills.web.redux",
                defaultTitle: "Redux",
                level: 80,
                href: "http://redux.js.org"
            }, {
                titleId: "skills.web.html",
                defaultTitle: "HTML",
                level: 70,
                href: "https://www.w3schools.com/html/"
            }, {
                titleId: "skills.web.css",
                defaultTitle: "CSS3",
                level: 80,
                href: "http://www.w3schools.com/css/"
            }, {
                titleId: "skills.web.js",
                defaultTitle: "JavaScript",
                level: 60,
                href: "http://www.w3schools.com/js/default.asp"
            }, {
                titleId: "skills.web.es6",
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
                        defaultTitle: "RxJS",
                        level: 30,
                        href: "http://reactivex.io/rxjs/"
                    }, {
                        titleId: "skills.web.libraries.semantic-ui",
                        defaultTitle: "Semantic UI React",
                        level: 40,
                        href: "https://react.semantic-ui.com"
                    }, {
                        titleId: "skills.web.libraries.material-ui",
                        defaultTitle: "Material-UI",
                        level: 40,
                        href: "http://www.material-ui.com"
                    }, {
                        titleId: "skills.web.libraries.redux-thunk",
                        defaultTitle: "Redux Thunk",
                        level: 50,
                        href: "https://github.com/gaearon/redux-thunk"
                    }, {
                        titleId: "skills.web.libraries.react-router",
                        defaultTitle: "React Router",
                        level: 50,
                        href: "https://github.com/ReactTraining/react-router"
                    }, {
                        titleId: "skills.web.libraries.react-intl",
                        defaultTitle: "React Intl",
                        level: 50,
                        href: "https://github.com/yahoo/react-intl"
                    }, {
                        titleId: "skills.web.libraries.react-table",
                        defaultTitle: "React Table",
                        level: 80,
                        href: "https://react-table.js.org"
                    }, {
                        titleId: "skills.web.libraries.sockjs",
                        defaultTitle: "SockJS",
                        level: 50,
                        href: "http://github.com/sockjs/sockjs-client"
                    }, {
                        titleId: "skills.web.libraries.stomp",
                        defaultTitle: "STOMP",
                        level: 50,
                        href: "http://jmesnil.net/stomp-websocket/doc"
                    }, {
                        titleId: "skills.web.libraries.jquery",
                        defaultTitle: "JQuery",
                        level: 30,
                        href: "https://jquery.com"
                    }, {
                        titleId: "skills.web.libraries.chartjs",
                        defaultTitle: "Chart.js",
                        level: 60,
                        href: "http://www.chartjs.org"
                    }, {
                        titleId: "skills.web.libraries.normalizr",
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
                        defaultTitle: "Node Package Manager (npm)",
                        level: 20,
                        href: "https://www.npmjs.com/"
                    }, {
                        titleId: "skills.web.project-tools.yarn",
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
        defaultTitle: "Android Development",
        level: 50,
        skills: [
            {
                titleId: "skills.android.dagger",
                defaultTitle: "Dagger 2",
                level: 30,
                href: "https://google.github.io/dagger"
            }, {
                titleId: "skills.android.arch-components",
                defaultTitle: "Android Architecture Components",
                level: 30,
                href: "https://developer.android.com/topic/libraries/architecture/index.html"
            }, {
                titleId: "skills.android.data-binding",
                defaultTitle: "Data Binding Library",
                level: 40,
                href: "https://developer.android.com/topic/libraries/data-binding/index.html"
            }
        ]
    }, {
        titleId: "skills.c-sharp",
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
                defaultTitle: "SQL",
                level: 60,
                href: "https://www.w3schools.com/sql"
            }, {
                titleId: "skills.databases.sqlite",
                defaultTitle: "SQLite",
                level: 90,
                href: "https://www.sqlite.org"
            }, {
                titleId: "skills.databases.postgresql",
                defaultTitle: "PostgreSQL",
                level: 50,
                href: "https://www.postgresql.org/"
            }, {
                titleId: "skills.databases.mysql",
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
                defaultTitle: "Git",
                level: 90,
                href: "https://git-scm.com"
            }, {
                titleId: "skills.vcs.svn",
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
                defaultTitle: "Linux",
                level: 60,
                href: "https://www.ubuntu.com/"
            }, {
                titleId: "skills.os.windows",
                defaultTitle: "Windows",
                level: 60,
                href: "http://www.microsoft.com/en-us/windows/"
            }
        ]
    }, {
        titleId: "skills.scada",
        commentId: "skills.scada_comment",
        defaultTitle: "SCADA Development",
        level: 40,
        skills: [
            {
                titleId: "skills.scada.ms3",
                defaultTitle: "Master SCADA 3.x",
                level: 60,
                href: "http://insat.ru"
            }, {
                titleId: "skills.scada.ms4",
                defaultTitle: "Master SCADA 4D",
                level: 30,
                href: "http://insat.ru"
            }, {
                titleId: "skills.scada.universal-opc",
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
                defaultTitle: "C/C++",
                level: 20
            }, {
                titleId: "skills.other.perl",
                defaultTitle: "Perl",
                level: 40
            }, {
                titleId: "skills.other.assembler",
                defaultTitle: "Assembler",
                level: 10
            }
        ]
    }
];

export default skills;
