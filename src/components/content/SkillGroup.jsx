const SkillGroup = ({ group }) => {
    <article
        key={group.label}
        className="flex flex-col gap-4 border-border p-6 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
    >   
        <dt className="text-sm font-semibold uppercase tracking-wider text-text-muted">
        {group.label}
        </dt>
        <dd>
        <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
            <li key={item}>
                <TechTag className="transition-colors hover:border-brand hover:bg-brand-soft hover:text-brand-hover">
                {item}
                </TechTag>
            </li>
            ))}
        </ul>
        </dd>
    </article>
};

export default SkillGroup;