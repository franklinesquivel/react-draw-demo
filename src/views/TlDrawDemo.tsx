import { Tldraw, TLUiOverrides } from '@tldraw/tldraw';

export const TlDrawDemo = () => {
    const myOverrides: TLUiOverrides = {
        tools(_editor, tools) {
            // Create a tool item in the ui's context.
            tools.card = {
                id: 'card',
                icon: 'trash',
                label: 'action.cut',
                kbd: 'c',
                readonlyOk: false,
                onSelect: () => {
                    // Whatever you want to happen when the tool is selected
                    // editor.setCurrentTool('card');
                    alert('TEST');
                }
            };

            return tools;
        }
    };


    return (
        <div id='tl-draw-demo'>
            <div className='tldraw__editor'>
                <Tldraw
                    overrides={ myOverrides }
                    // onUiEvent={ (a, b) => {
                    //     console.log(a, b);
                    // } }
                />
            </div>
        </div>
    );
};