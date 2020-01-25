import React from 'react';
import { Modal, Button } from "react-materialize";

import 'material-design-icons/iconfont/material-icons.css';

import './styles.css';

function MaterializeModal({ trigger, title, body, action }){

    return (
    <div>
        <Modal
            actions={[
            <>
            <Button
                className="red"
                modal="close"
                node="button"
                waves="light"
            >
                Cancelar
            </Button>
            <Button
                className="blue"
                modal="close"
                node="button"
                waves="light"
                onClick={action}
            >
                Confirmar
            </Button>
            </>
            ]}
            bottomSheet={false}
            fixedFooter={true}
            header={title}
            id="modal-new-operation"
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={trigger}
            >
            { body }
        </Modal>
    </div>
    )
}

export default MaterializeModal;