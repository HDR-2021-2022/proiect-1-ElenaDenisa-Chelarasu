import socket

# creeaza un server socket
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# specifica ca serverul va rula pe portul 5678, accesibil de pe orice ip al serverului
serversocket.bind(('', 5678))
# serverul poate accepta conexiuni; specifica cati clienti pot astepta la coada
serversocket.listen(5)

while True:
    print('#########################################################################')
    print('Serverul asculta potentiali clienti.')
    # asteapta conectarea unui client la server
    # metoda `accept` este blocanta => clientsocket, care reprezinta socket-ul corespunzator clientului conectat
    (clientsocket, address) = serversocket.accept()
    print('S-a conectat un client.')
    # se proceseaza cererea si se citeste prima linie de text
    cerere = ''
    linieDeStart = ''
    while True:
        data = clientsocket.recv(1024)
        cerere = cerere + data.decode()
        print('S-a citit mesajul: \n---------------------------\n' + cerere + '\n---------------------------') 
        pozitie = cerere.find('\r\n')
        if (pozitie > -1):
            linieDeStart = cerere[0:pozitie]
            print('S-a citit linia de start din cerere: ##### ' + linieDeStart + ' #####')
            break
    print('S-a terminat citirea.')
    # TODO interpretarea sirului de caractere `linieDeStart` pentru a extrage numele resursei cerute
    if linieDeStart == '':
        clientsocket.close()
        print('Comunicare esuata')
        continue
    
    txt = linieDeStart.split()
    nume = txt[1]
    if nume == '/':
        nume = '/index.html'
    # TODO trimiterea răspunsului HTTP
    mesaj = 'Hello world' + nume
    clientsocket.sendall(mesaj.encode())
    clientsocket.sendall('\r\n'.encode())
    clientsocket.close()
    print ('S-a terminat comunicarea cu clientul.')