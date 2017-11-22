/**
 * Skills
 *
 * Created by Alex Elkin on 22.11.2017.
 */

const skills = [
    {
        titleId: "skills.java",
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
            }
        ],
        groups: [
            {
                titleId: "skills.java.libraries",
                defaultTitle: "Java Libraries",
                level: 70,
                skills: [
                    {
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
            }
        ]
    }
];

export default skills;
