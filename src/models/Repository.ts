export type Repository = {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    html_url: string;
    description: string|null;
    fork: boolean;
    url: string;
    tags_url: string;
    languages_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string|null;
    homepage: string|null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    forks_count: number;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: string|null;
    forks: number;
    open_issues: number;
    default_branch: string;
}
