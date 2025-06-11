class labelInput extends HTMLElement{
    connectedCallback(){
        const name = this.getAttribute('sp-name');
        const labelText = this.getAttribute('sp-label');
        const place = this.getAttribute('sp-place');
        const type = this.getAttribute('sp-type') || 'text';
        const numeric = this.getAttribute('sp-numeric');
        const inputId = `input-${name}`;

        const wrapper = document.createElement('label');
        const span = document.createElement('span');
        const input = document.createElement('input');
        const alert = document.createElement('p');
        

        

        span.textContent = labelText

        input.type = type
        input.placeholder = place
        input.name = name

        wrapper.setAttribute("for", inputId)
        wrapper.appendChild(span)
        wrapper.appendChild(input)
        wrapper.appendChild(alert)
        this.appendChild(wrapper)

        this._input = input

        input.addEventListener('input', ()=>{

            if(this.hasAttribute('sp-numeric')){
                const val = this._input?.value || ""
                const num = val.replace(',', '.');
                if(isNaN(num)){
                    alert.textContent = "Esse campo só aceita numeros."
                    return
                }else{
                    alert.textContent = ""
                }
            }
            
            this.dispatchEvent(new Event('input'));
        })
    }

    get value(){
        const val = this._input?.value || ""

        if(this.hasAttribute('sp-numeric')){
            const num = val.replace(',', '.');
            if(isNaN(num)){
                console.log("Esse campo so aceita numeros")
                return 0;
            }
            return Number(num)
        }
        return val
    }

    set value(val){
        if(typeof  val === 'number' && this.hasAttribute('sp-numeric')){
            this._input.value = val.toFixed(2).replace('.', ',')
        }else{
            this._input.value = val;
        }
    }
}

customElements.define('label-input', labelInput)