const DATA = {
  profile: {
    name: "Rahmat Sunjani",
    role: "Backend Engineer",
    description: "Building things, understanding how they work.",
    focus: "Java • Spring Boot • Svelte • Enterprise Backend",
    mission: {
      title: "Master Spring Boot through hands-on enterprise projects.",
      progress: 62,
      started: "August 2026"
    },
    techStack: ["Java", "Spring Boot", "Jooby", "Svelte", "PostgreSQL", "REST", "SOAP", "LDAP", "Docker", "CI/CD", "Zimbra"],
    links: { github: "https://github.com/fsdio", linkedin: "https://www.linkedin.com/in/rahsun" },
    philosophy: "I don't want to just know how to use a framework. I want to understand why it works."
  },
  roadmap: {
    springBoot: [
      { category: "Spring Core", items: [
        { id: "ioc", title: "IoC / Dependency Injection", status: "planned" },
        { id: "app-context", title: "ApplicationContext", status: "planned" },
        { id: "bean-lifecycle", title: "Bean lifecycle", status: "planned" },
        { id: "component-scanning", title: "Component scanning", status: "planned" },
        { id: "configuration", title: "Configuration", status: "planned" },
        { id: "profiles", title: "Profiles", status: "planned" },
        { id: "config-props", title: "ConfigurationProperties", status: "planned" }
      ]},
      { category: "Spring Web", items: [
        { id: "spring-mvc", title: "Spring MVC", status: "planned" },
        { id: "controller", title: "Controller", status: "planned" },
        { id: "request-response", title: "Request / Response", status: "planned" },
        { id: "dto", title: "DTO", status: "planned" },
        { id: "validation", title: "Validation", status: "planned" },
        { id: "exception-handling", title: "Exception Handling", status: "planned" },
        { id: "rest-api-design", title: "REST API design", status: "planned" }
      ]},
      { category: "Data", items: [
        { id: "spring-data-jpa", title: "Spring Data JPA", status: "planned" },
        { id: "hibernate", title: "Hibernate fundamentals", status: "planned" },
        { id: "repository", title: "Repository", status: "planned" },
        { id: "entity-mapping", title: "Entity mapping", status: "planned" },
        { id: "transactions", title: "Transactions", status: "planned" },
        { id: "flyway", title: "Flyway", status: "planned" },
        { id: "query-optimization", title: "Query optimization", status: "planned" }
      ]},
      { category: "Security", items: [
        { id: "authentication", title: "Authentication", status: "planned" },
        { id: "authorization", title: "Authorization", status: "planned" },
        { id: "password-hashing", title: "Password hashing", status: "planned" },
        { id: "security-filter-chain", title: "SecurityFilterChain", status: "planned" },
        { id: "jwt", title: "JWT", status: "planned" },
        { id: "role-based-access", title: "Role-based access", status: "planned" },
        { id: "oauth2", title: "OAuth2", status: "planned" },
        { id: "oidc", title: "OIDC", status: "planned" }
      ]},
      { category: "Integration", items: [
        { id: "rest-client", title: "REST Client", status: "planned" },
        { id: "restclient", title: "RestClient", status: "planned" },
        { id: "http-interface", title: "HTTP Interface", status: "planned" },
        { id: "soap", title: "SOAP", status: "planned" },
        { id: "ldap", title: "LDAP", status: "planned" },
        { id: "kafka", title: "Kafka", status: "planned" },
        { id: "external-integration", title: "External service integration", status: "planned" }
      ]},
      { category: "Resilience", items: [
        { id: "timeout", title: "Timeout", status: "planned" },
        { id: "retry", title: "Retry", status: "planned" },
        { id: "circuit-breaker", title: "Circuit Breaker", status: "planned" },
        { id: "idempotency", title: "Idempotency", status: "planned" },
        { id: "error-handling", title: "Error handling", status: "planned" }
      ]},
      { category: "Async", items: [
        { id: "async", title: "@Async", status: "planned" },
        { id: "completable-future", title: "CompletableFuture", status: "planned" },
        { id: "scheduling", title: "Scheduling", status: "planned" },
        { id: "background-processing", title: "Background processing", status: "planned" },
        { id: "event-driven", title: "Event-driven architecture", status: "planned" }
      ]},
      { category: "Testing", items: [
        { id: "junit", title: "JUnit", status: "planned" },
        { id: "mockito", title: "Mockito", status: "planned" },
        { id: "controller-testing", title: "Controller testing", status: "planned" },
        { id: "integration-testing", title: "Integration testing", status: "planned" },
        { id: "testcontainers", title: "Testcontainers", status: "planned" }
      ]},
      { category: "Observability", items: [
        { id: "logging", title: "Logging", status: "planned" },
        { id: "structured-logging", title: "Structured logging", status: "planned" },
        { id: "actuator", title: "Actuator", status: "planned" },
        { id: "metrics", title: "Metrics", status: "planned" },
        { id: "opentelemetry", title: "OpenTelemetry", status: "planned" },
        { id: "distributed-tracing", title: "Distributed tracing", status: "planned" },
        { id: "trace-id", title: "Trace ID", status: "planned" }
      ]},
      { category: "Deployment", items: [
        { id: "docker", title: "Docker", status: "planned" },
        { id: "docker-compose", title: "Docker Compose", status: "planned" },
        { id: "ci-cd", title: "CI/CD", status: "planned" },
        { id: "kubernetes", title: "Kubernetes", status: "planned" },
        { id: "okd", title: "OKD", status: "planned" }
      ]}
    ],
    svelte: [
      { category: "Core", items: [
        { id: "reactivity", title: "Reactivity", status: "planned" },
        { id: "components", title: "Components", status: "planned" },
        { id: "stores", title: "Stores", status: "planned" },
        { id: "lifecycle", title: "Lifecycle", status: "planned" }
      ]},
      { category: "Advanced", items: [
        { id: "actions", title: "Actions", status: "planned" },
        { id: "transitions", title: "Transitions", status: "planned" },
        { id: "animation", title: "Animation", status: "planned" },
        { id: "kit", title: "SvelteKit", status: "planned" }
      ]}
    ]
  },
  projects: [
    /**
    {
      id: "authentication-lab",
      title: "Authentication Lab",
      description: "Full-stack authentication system with JWT, role-based access, and Spring Security integration.",
      technologies: ["Spring Boot", "Spring Security", "Svelte", "PostgreSQL"],
      concepts: ["JWT", "Authentication", "Authorization", "Role management"],
      githubUrl: "https://github.com/fsdio/authentication-lab",
      status: "completed"
    }
    **/
  ],
  learningLog: [
    // { date: "2026-08-20", title: "Started Spring Boot Roadmap", description: "Created the initial Spring Boot learning environment and roadmap.", tags: ["springboot", "learning"] },
  ]
};

export default DATA;