import React, { useState } from "react";

import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversation from "./Conversation";

import NewConversationModal from "./NewConversationModel";
import NewContactModal from "./NewContactModel";

const CONVERSATION_KEY = "conversation";
const CONTACTS_KEY = "contacts";

function Sidebar({ id }: any) {
  const [modalOpen, setModelOpen] = useState(false);

  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY as any);
  const conversationOpen = activeKey === CONVERSATION_KEY;

  const closeModal = () => {
    setModelOpen(false);
  };

  return (
    <div
      style={{
        width: "250px",
      }}
      className="d-flex flex-column"
    >
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversation />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>

        <div className="p-2 border-top border-right small">
          Your Id : <span className="text-muted">{id}</span>
        </div>

        <Button onClick={ () => {setModelOpen(true)}} className="rounded-0">
          New {conversationOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? <NewConversationModal closeModal={closeModal}/> : <NewContactModal closeModal={closeModal}/>}
      </Modal>
    </div>
  );
}

export default Sidebar;
