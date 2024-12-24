import css from "./Contact.module.css";

export const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.item}>
      <div className={css.contactInfo}>
        <div className={css.nameWrapper}>
          <svg className={css.icon} viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"
            />
          </svg>
          <span className={css.name}>{contact.name}</span>
        </div>
        <div className={css.phoneWrapper}>
          <svg className={css.icon} viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
            />
          </svg>
          <span className={css.number}>{contact.number}</span>
        </div>
      </div>
      <button
        type="button"
        className={css.deleteButton}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};
